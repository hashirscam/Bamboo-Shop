import Client from "shopify-buy";
import axios from 'axios';

const params = {
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(
            process.env.REACT_APP_DEV_URL + url,
            params
        );
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const makePaymentRequest = axios.create({
    baseURL: process.env.REACT_APP_DEV_URL,
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
    },
});

// "fragment VariantFragment on ProductVariant  { id,title,price { amount,currencyCode },priceV2: price { amount,currencyCode },weight,available: availableForSale,sku,compareAtPrice { amount,currencyCode },compareAtPriceV2: compareAtPrice { amount,currencyCode },image { id,src: url,altText,width,height },selectedOptions { name,value },unitPrice { amount,currencyCode },unitPriceMeasurement { measuredType,quantityUnit,quantityValue,referenceUnit,referenceValue } },fragment ProductFragment on Product  { id,availableForSale,createdAt,updatedAt,descriptionHtml,description,handle,productType,title,vendor,publishedAt,onlineStoreUrl,options { id,name,values },images (first: 250) { pageInfo { hasNextPage,hasPreviousPage },edges { cursor,node { id,src: url,altText,width,height } } },variants (first: 250) { pageInfo { hasNextPage,hasPreviousPage },edges { cursor,node { ...VariantFragment } } } },query ($first:Int!,$query:String,$sortKey:ProductSortKeys,$reverse:Boolean)  { products (first: $first query: $query sortKey: $sortKey reverse: $reverse) { pageInfo { hasNextPage,hasPreviousPage },edges { cursor,node { ...ProductFragment } } } }"

const client = Client.buildClient({
  domain: "shopify.bamboofiy.com",
  storefrontAccessToken: "48d950919fa52bee3d40fa0c25fa61d6",
});

client.checkout.create().then((checkout) => {
  sessionStorage.setItem("checkoutId", checkout.id);
});

export const fetchProducts = async () => {
  try {
    const products = await client.product.fetchAll()
    return products;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const fetchProduct = async (pid) => {
  try {
    const id = "gid://shopify/Product/" + pid;
    const product = await client.product.fetch(id)
    return product;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const addLineItem = (productId, quantity) => {
  const checkoutId = sessionStorage.getItem("checkoutId");
  const lineItemsToAdd = [
    {
      variantId: productId,
      quantity: quantity
    }
  ];
  client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((checkout) => {
  });
};

export const removeLineItem = (lineItemIdsToRemove) => {
  const checkoutId = sessionStorage.getItem("checkoutId");
  client.checkout.removeLineItems(checkoutId, lineItemIdsToRemove).then((checkout) => {
  console.log(checkout.lineItems);
  });
};

export const updateLineItem = (lineItemId, quantity) => {
  const checkoutId = sessionStorage.getItem("checkoutId");
  const lineItemsToUpdate = [
    { id: lineItemId, quantity: quantity }
  ];
  client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then((checkout) => {});
};

export const fetchCheckout = async () => {
  const checkoutId = sessionStorage.getItem("checkoutId");
  try {
    const checkout = await client.checkout.fetch(checkoutId)
    return checkout;
  } catch (error) {
    console.log(error);
    return error;
  }
}


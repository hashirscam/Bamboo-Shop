import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import SignatureCanvas from "react-signature-canvas";
import { MdClose } from "react-icons/md";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { fetchProducts } from "../../utils/api";
import "./custom.css";

const validationSchema = Yup.object({
  name: Yup.string().min(2,"Name Should Be More Than 2 Letters").required("Name Is Required"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email Is Required"),
  phone: Yup.string()
    .min(10, "Phone Number Should Be 10 Digits")
    .max(10, "Phone Number Should Be 10 Digits")
    .required("Phone Number Is Required"),
  extra: Yup.string().max(500, "Maximum 500 Characters"),
  agreement: Yup.boolean().oneOf([true], "You Must Accept The Agreement"),
});

const Custom = () => {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetchProducts().then((res) => {
      setProducts(res);
    });
  };

  const sigCanvas = useRef({});
  const fileInput = useRef(null);
  const [file, setFile] = useState(null);


  const clear = () => sigCanvas.current.clear();

  const sendEmail = async (values, actions) => {
    const sigDataURL = sigCanvas.current.getTrimmedCanvas().toDataURL();
    let fileDataURL = null;

    if (file) {
      console.log(values);
      const reader = new FileReader();
      reader.onload = (event) => {
        fileDataURL = event.target.result;
        const emailParams = {
          ...values,
          signature: sigDataURL,
          attachment: fileDataURL,
        };
        console.log(emailParams)
        emailjs
          .send("service_e85sojg", "template_w3prnz6", emailParams, "dFSJ6tNIFHG4oOFJ5")
          .then(
            (result) => {
              actions.resetForm();
              setFile(null);
              clear();
              fileInput.current.value = null;
              {alert("Email Sent")}
            },
            (error) => {
              console.log(error.text);
            }
          );
      };

      reader.readAsDataURL(file);
    } else {
      console.log("no logo file");
      const emailParams = {
        ...values,
        signature: sigDataURL,
      };

      emailjs
        .send("service_e85sojg", "template_w3prnz6", emailParams, "dFSJ6tNIFHG4oOFJ5")
        .then(
          (result) => {
            console.log(result.text);
            actions.resetForm();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "", extra: "",8295290339627:"",8295292043563:"",8295293223211:"",8295293452587:"", agreement: false }}
      validationSchema={validationSchema}
      onSubmit={sendEmail}
    >
      <Form className="eco__form">
        <Field type="text" name="name" placeholder="Full Name" />
        <ErrorMessage name="name" component="div" className="error" />
        <Field type="email" name="email" placeholder="Email Address" />
        <ErrorMessage name="email" component="div" className="error" />
        <Field type="number" name="phone" placeholder="Phone/Business Number" />
        <ErrorMessage name="phone" component="div" className="error" />


        <div className="text green custom_heading">
          <p>Products</p>
          <p>Quantity</p>
        </div>
        <div className="custom_products" role="group">
          {products?.map((item) => (
            <div key={item.id} className="custom_product">
              {/* <Field type="checkbox" name="checkboxes" value={item.id} /> */}
              <div className="custom_img">
                <div className="img-container">
                  <img
                    src={
                      item.images[0].src
                    }
                    alt="product"
                  />
                </div>
              </div>
                <span className="custom_name">{item.title}</span>
              <Field type="number" name={item.id.replace('gid://shopify/Product/', '')} className="quantity" />
              <div className="custom_name">pieces</div>
            </div>
          ))}
        </div>
        <ErrorMessage name="checkboxes" component="div" className="error"/>

        <div className="upload__logo">
          <label>Upload your logo (Optional)</label>
          <input
            ref={fileInput}
            name="logo"
            type="file"
            onChange={onFileChange}
          />
          <label>Size Limit: 350KB</label>
        </div>

        <Field as="textarea" className="extra" name="extra" placeholder="Additional Information (Optional)" />

        <div className="text green">Electronic Signature</div>
        <div className="signature">
          <MdClose onClick={clear} />
          <SignatureCanvas
            penColor="black"
            canvasProps={{ width: 498, height: 200, className: "sigCanvas" }}
            ref={sigCanvas}
          />
        </div>

        <div className="agreement">
          <Field type="checkbox" name="agreement" />
          <p>I understand and accept that my electronic signature will be as valid as a handwritten signature and considered original to the extent allowed by applicable law.</p>
        </div>
        <ErrorMessage name="agreement" component="div" className="error" id="end"/>
        
        <button className="button full-width" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default Custom;

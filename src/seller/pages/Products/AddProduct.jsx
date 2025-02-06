import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, TextField, Box, Typography } from "@mui/material";
import { uploadToCloudinary } from "../../../utils/UploadToCloudinary"; // Make sure this import path is correct

const AddProduct = () => {
  const [imageUrl, setImageUrl] = useState(null); // State to store uploaded image URL
  const [imagePreview, setImagePreview] = useState(null); // State to store image preview

  // Validation Schema with Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Product name is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be positive"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
    image: Yup.mixed().required("Product image is required"),
  });

  // Form Submit Handler
  const handleSubmit = async (values) => {
    const { name, price, description, category, image } = values;

    try {
      // Upload image to Cloudinary
      const uploadedImageUrl = await uploadToCloudinary(image);
      setImageUrl(uploadedImageUrl); // Update state with image URL

      // Prepare product data
      const productData = {
        name,
        price,
        description,
        category,
        imageUrl: uploadedImageUrl, // URL of the uploaded image
      };

      // You can send the `productData` to your server (e.g., using axios)
      console.log("Product data:", productData);

      // Example for API call:
      // axios.post('/your-api-endpoint', productData);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="container" style={{ maxWidth: "600px", margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom>
        Add Product
      </Typography>
      <Formik
        initialValues={{
          name: "",
          price: "",
          description: "",
          category: "",
          image: null,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <Box mb={2}>
              <Field
                name="name"
                label="Product Name"
                placeholder="Enter product name"
                fullWidth
                component={TextField}
                variant="outlined"
              />
              <ErrorMessage name="name" component="div" className="error-message" />
            </Box>

            <Box mb={2}>
              <Field
                name="price"
                label="Price"
                placeholder="Enter price"
                fullWidth
                component={TextField}
                variant="outlined"
                type="number"
              />
              <ErrorMessage name="price" component="div" className="error-message" />
            </Box>

            <Box mb={2}>
              <Field
                name="description"
                label="Description"
                placeholder="Enter product description"
                fullWidth
                component={TextField}
                variant="outlined"
              />
              <ErrorMessage name="description" component="div" className="error-message" />
            </Box>

            <Box mb={2}>
              <Field
                name="category"
                label="Category"
                placeholder="Enter product category"
                fullWidth
                component={TextField}
                variant="outlined"
              />
              <ErrorMessage name="category" component="div" className="error-message" />
            </Box>

            <Box mb={3}>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setFieldValue("image", file);
                  setImagePreview(URL.createObjectURL(file)); // Preview image
                }}
                style={{ display: "none" }}
                id="image-upload"
              />
              <label htmlFor="image-upload">
                <Button variant="contained" color="secondary" component="span">
                  Upload Image
                </Button>
              </label>
              <ErrorMessage name="image" component="div" className="error-message" />
            </Box>

            {/* Show image preview if available */}
            {imagePreview && (
              <Box mb={3}>
                <Typography variant="h6">Image Preview:</Typography>
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    marginTop: "10px",
                  }}
                />
              </Box>
            )}

            <Box mb={3}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Add Product
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProduct;

import React, {useState} from 'react';
import {Text, View,Image,TextInput} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';

const PLACEHOLDeR_IMG =
  'https://www.brownweinraub.com/wp-content/uploads//2017/09/placeholder.jpg';

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A url is required'),
  caption: Yup.string().max(220, 'caption has reached the character limit'),
});

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDeR_IMG);

  return (
    <Formik
      initialValues={{caption: '', imgUrl: ''}}
      onSubmit={values => console.log(values)}
      validationSchema={uploadPostSchema}>
      {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
        <>
          <View>
            <Image />
          </View>
          <TextInput />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;

import React from 'react';
import axios from 'axios';
import { useGetUser } from './useGetUser';

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const withEditableResource = (Component, resourcePath, resourceName) => {
  return props => {
    const { originalData, setOriginalData } = useGetUser(resourcePath);
    const { data, setData } = useGetUser(resourcePath);

    const onChange = change => {
      setData({ ...data, ...change });
    };

    const onSave = async () => {
      const response = await axios.post(resourcePath, { [resourceName]: data });
      setOriginalData(response.data);
      setData(response.data);
    };

    const onReset = () => {
      setData(originalData);
    };

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onSave${capitalize(resourceName)}`]: onSave,
      [`onReset${capitalize(resourceName)}`]: onReset,
    };

    return <Component {...props} {...resourceProps} />;
  };
};

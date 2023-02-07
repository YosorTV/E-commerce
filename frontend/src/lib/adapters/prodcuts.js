const basicDataAdapter = (loading, error) => ({
  loading,
  error: error?.message,
});

export const productsAdapter = ({ data, fetching, error }) => {
  return {
    data: data?.nikeJordan?.data.attributes,
    ...basicDataAdapter(fetching, error),
  };
};
export const productDetailsAdapter = ({ data, fetching, error }) => ({
  data: data,
  ...basicDataAdapter(fetching, error),
});

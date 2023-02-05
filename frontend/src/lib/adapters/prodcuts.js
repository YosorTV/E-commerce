const basicDataAdapter = (loading, error) => ({
  loading,
  error: error?.message,
});

export const productsAdapter = ({ data, fetching, error }) => ({
  data: data?.products?.data.attributes,
  ...basicDataAdapter(fetching, error),
});

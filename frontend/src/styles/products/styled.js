import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  margin: 2rem 4rem;
  .section-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0 2rem 0;
    &_title {
      font-size: 3rem;
      font-weight: 800;
      color: #696969;
    }
    &_description {
      font-size: 1.2rem;
      text-align: center;
      font-weight: 600;
      color: #3d3d3d;
    }
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
`;

export const StyledProducts = styled.figure`
  background: white;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 0px 1rem #cfcfcf;
  transition: 0.3s all ease-in-out;
  img {
    height: 30vh;
    width: 100%;
    object-fit: cover;
  }
  h3 {
    padding: 0rem 0rem 1rem 0rem;
    font-weight: 600;
    font-size: 22px;
    color: #343434;
  }
  .product-description {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    &_title {
      font-size: 18px;
      padding: 0.5rem;
      height: 28px;
      color: #171717;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &_info {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 0.5rem;
      margin-top: 1rem;
      &_badge {
        font-size: 14px;
        color: #ffff;
        font-weight: 400;
        border: 2px solid #8d8d8d78;
        border-radius: 99999px;
        padding: 0.2rem 0.6rem;
        background: #9f9f9f;
        text-transform: capitalize;
      }
      &_price {
        font-size: 16px;
        color: #222222;
        font-weight: 600;
      }
    }
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 1.5rem #bfbfbf;
  }
`;

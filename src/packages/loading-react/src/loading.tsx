import React, { useState, SetStateAction, useEffect } from "react";
import styled from "styled-components";
import loadingGif from "../assets/loading.gif";

const Component = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const LoadingGif = styled.img`
  margin: auto;
  display: block;
  width: 8rem;
  @media ${(props) => props.theme.screenSizes.mobile} {
    width: 50%;
  }
`;

type LoadingProps = {
  isLoading: boolean;
};

export const LoadingComponent = ({ isLoading }: LoadingProps) => {
  if (isLoading)
    return (
      <Component>
        <LoadingGif src={loadingGif} />
      </Component>
    );
  else return <></>;
};

import React, { useState, SetStateAction, useEffect } from "react";
import { AppTheme } from "../../../App";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { RiCloseLine } from "react-icons/ri";

const Component = styled.div`
  position: absolute;
  width: 100vw;
  bottom: 0;
  left: 0;
`;

const ContentContainer = styled.div`
  width: 65rem;
  margin: 1rem auto;
  @media ${(props) => props.theme.screenSizes.mobile} {
    width: 100%;
  }
`;

type ContentProps = {
  show: boolean;
  backgroundColor: string;
  hasMessageFade: boolean;
};

const Content = styled.div<ContentProps>`
  position: relative;
  margin-left: auto;
  margin-bottom: 1rem;
  width: 20rem;
  background-color: ${(props) => props.backgroundColor};
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  transition: ${(props) => (props.hasMessageFade ? 1 : 0)}s opacity;
  opacity: ${(props) => (props.show ? "1" : "0")};
  @media ${(props) => props.theme.screenSizes.mobile} {
    width: 90%;
    margin: auto;
  }
`;

const CloseIconButton = styled(Button)`
  && {
    color: ${(props) => props.theme.colors.primaryBackground};
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    margin: 0;
    padding: 0.15rem;
    min-width: 0;
    width: fit-content;
    border-radius: 50%;
  }
`;

type CloseIconProps = {
  textColor: string;
};

const CloseIcon = styled(RiCloseLine)<CloseIconProps>`
  color: ${(props) => props.textColor};
  :hover {
    opacity: 0.75;
  }
`;

type TextProps = {
  textColor: string;
};

const Text = styled.p<TextProps>`
  color: ${(props) => props.textColor};
`;

const timeMessageStaysOnScreen = 4000;

export type messageToUserVariantType = "default" | "error" | "success";

export type MessageToUserProps = {
  message: string | JSX.Element;
  variant?: messageToUserVariantType;
};

export const MessageToUser = (props: MessageToUserProps) => {
  const { message, variant = "default" } = props;
  const [show, setShow] = useState(false);
  const [fadeTimer, setFadeTimer] = useState<SetStateAction<any>>(null);
  const [hasMessageFade, setHasMessageFade] = useState(true);

  const variantColorScheme = {
    default: {
      textColor: AppTheme.colors.primaryBackground,
      backgroundColor: AppTheme.colors.primaryText,
    },
    error: { textColor: "white", backgroundColor: AppTheme.colors.error },
    success: { textColor: "white", backgroundColor: AppTheme.colors.success },
  };

  useEffect(() => {
    if (message != null) {
      setShow(true);
      setHasMessageFade(true);
      setFadeTimer(
        setTimeout(() => {
          setShow(false);
          setFadeTimer(null);
        }, timeMessageStaysOnScreen)
      );
    }
    return () => {
      clearTimeout(fadeTimer);
    };
  }, [props]);

  const onCloseMessage = () => {
    clearTimeout(fadeTimer);
    setShow(false);
    setFadeTimer(null);
    setHasMessageFade(false);
  };

  if (message) {
    return (
      <Component>
        <ContentContainer>
          <Content
            show={show}
            hasMessageFade={hasMessageFade}
            backgroundColor={variantColorScheme[variant].backgroundColor}
          >
            <CloseIconButton>
              <CloseIcon
                onClick={onCloseMessage}
                textColor={variantColorScheme[variant].textColor}
                size={"1.5rem"}
              />
            </CloseIconButton>
            {typeof message == "string" ? (
              <Text textColor={variantColorScheme[variant].textColor}>
                {message}
              </Text>
            ) : (
              message
            )}
          </Content>
        </ContentContainer>
      </Component>
    );
  } else return <></>;
};

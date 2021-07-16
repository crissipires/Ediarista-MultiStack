import React from "react";
import { PageTitleContainer, PageTitleStyled,PageSubtitleStyle} from './PageTitleStyle'

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{props.title}</PageTitleStyled>
      <PageSubtitleStyle>{props.subtitle}</PageSubtitleStyle>
    </PageTitleContainer>
  );
};

export default PageTitle;

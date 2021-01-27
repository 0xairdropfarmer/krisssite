import React from "react";
import WidgetContainer from "./WidgetContainer";
import WidgetTitle from "./WidgetTitle";
import config from "../../../data/SiteConfig";
import sidebar_ads from '../../../content/images/kriss-banner-1.jpg';

const WidgetAds = () => (
  <WidgetContainer extraClass="categories-container">
    <WidgetTitle title="Sponsor" />

   <a href="https://www.creative-tim.com/campaign?ref=kriss.io" target="_blank" rel="nofollow noopener noreferrer">
    <img src={sidebar_ads} />
    </a>
  </WidgetContainer>
)

export default WidgetAds;
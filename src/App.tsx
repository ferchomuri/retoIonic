import React from "react";
import classes from "../../theme/generalStyles.module.css";
import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonMenuToggle,
  IonSplitPane,
  IonFooter,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { Route, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import BlogNews from "./pages/BlogNews/BlogNews";
import Contact from "./pages/Contact/Contact";
import ServicesProducts from "./pages/ServicesProducts/ServicesProducts";

import {
  homeOutline,
  businessOutline,
  newspaperOutline,
  colorFillOutline,
  callOutline,
  briefcaseOutline,
} from "ionicons/icons";

const menuBar = {
  marginTop: "60%",
  position: "relative",
} as React.CSSProperties;

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu side="start" contentId="appM1" type="reveal">
        <IonContent>
          <IonList style={menuBar}>
            <IonMenuToggle>
              <IonItem routerLink="/home" routerDirection="none" lines="none">
                <IonIcon
                  color="warning"
                  slot="start"
                  icon={homeOutline}
                ></IonIcon>
                <IonLabel>Home</IonLabel>
              </IonItem>

              <IonItem
                routerLink="/services-products"
                routerDirection="none"
                lines="none"
              >
                <IonIcon
                  color="warning"
                  slot="start"
                  icon={briefcaseOutline}
                ></IonIcon>
                <IonLabel>Services &amp; Products</IonLabel>
              </IonItem>

              <IonItem
                routerLink="/about-us"
                routerDirection="none"
                lines="none"
              >
                <IonIcon
                  color="warning"
                  slot="start"
                  icon={businessOutline}
                ></IonIcon>
                <IonLabel>About Us</IonLabel>
              </IonItem>

              <IonItem
                routerLink="/blog-news"
                routerDirection="none"
                lines="none"
              >
                <IonIcon
                  color="warning"
                  slot="start"
                  icon={newspaperOutline}
                ></IonIcon>
                <IonLabel>Blog &amp; News</IonLabel>
              </IonItem>

              <IonItem
                routerLink="/contact"
                routerDirection="none"
                lines="none"
              >
                <IonIcon
                  color="warning"
                  slot="start"
                  icon={callOutline}
                ></IonIcon>
                <IonLabel>Contact</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonRouterOutlet id="appM1">
        <Route path="/home" component={Home} exact />
        <Route path="/about-us" component={AboutUs} exact />
        <Route path="/services-products" component={ServicesProducts} exact />
        <Route path="/blog-news" component={BlogNews} exact />
        <Route path="/contact" component={Contact} exact />
        <Redirect to="/home" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

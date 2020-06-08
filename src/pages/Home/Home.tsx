import React from "react";
import classes from "../../theme/generalStyles.module.css";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonMenuButton,
  IonLabel,
  IonFooter,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonButton,
  IonCardContent,
} from "@ionic/react";
import {
  logoFacebook,
  logoLinkedin,
  pin,
  wifi,
  wine,
  warning,
  walk,
} from "ionicons/icons";

const myLogo = {
  textAlign: "center",
  height: 50,
} as React.CSSProperties;

const toolbar = {
  height: 50,
} as React.CSSProperties;

const footer = {
  marginLeft: "50%",
} as React.CSSProperties;

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className={classes.logo} color="dark">
          <img
            src="../assets/img/kin_whitefinal.png"
            alt="Kin Analytics"
            width="100"
          ></img>
        </IonToolbar>
        <IonToolbar className={classes.toolbar} color="dark">
          <IonButtons slot="start">
            <IonMenuButton color="warning" />
          </IonButtons>
          <IonTitle color="warning">Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className={classes.backgroundAll}>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>
                    The firsst analytically driven footbal team in the world.
                  </IonCardSubtitle>
                  <IonCardTitle>MEET OUR CLUB: ATLÉTICO KIN</IonCardTitle>
                </IonCardHeader>
                <IonContent>
                  KIN ANALYTICS OFFERS ANALYTICAL CONSULTING SERVICES FOR ALL
                  TYPES OF COMPANIES, ORGANIZATIONS AND ENTERPRISES AROUND
                  WORLD.
                </IonContent>
              </IonCard>
              <IonCard>
                <IonItem>
                  <IonIcon color="warning" icon={pin} slot="start" />
                  <IonLabel>BECOME ANALYTICALLY DRIVEN</IonLabel>
                  <IonButton fill="outline" slot="end" color="warning">
                    GO
                  </IonButton>
                </IonItem>

                <IonCardContent>
                  Kin Analytics Offers Analytical Consulting Services For All
                  Types Of Companies, Organizations And Enterprises Around
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Our Clients</IonCardTitle>
                </IonCardHeader>
                <IonItem href="#" className="ion-activated">
                  <IonLabel>
                    <img
                      src="../assets/img/ligaPro.png"
                      alt="Kin Analytics"
                      width="15%"
                    ></img>
                  </IonLabel>
                  <IonLabel>Liga Pro</IonLabel>
                </IonItem>
                <IonItem href="#" className="ion-activated">
                  <IonLabel>
                    <img
                      src="../assets/img/yaEsta.png"
                      alt="Kin Analytics"
                      width="15%"
                    ></img>
                  </IonLabel>
                  <IonLabel>Ya esta.com</IonLabel>
                </IonItem>

                <IonItem href="#" className="ion-activated">
                  <IonLabel>
                    <img
                      src="../assets/img/utec.png"
                      alt="Kin Analytics"
                      width="15%"
                    ></img>
                  </IonLabel>
                  <IonLabel>UTEC</IonLabel>
                </IonItem>

                <IonItem href="#" className="ion-activated">
                  <IonLabel>
                    <img
                      src="../assets/img/Paynet-final.fw_.png"
                      alt="Kin Analytics"
                      width="15%"
                    ></img>
                  </IonLabel>
                  <IonLabel>PayNet</IonLabel>
                </IonItem>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonToolbar className={classes.toolbar} color="dark">
          <IonLabel position="fixed" className={classes.footer}>
            <IonIcon
              size="large"
              color="primary"
              slot="start"
              icon={logoFacebook}
            ></IonIcon>
            <IonIcon
              size="large"
              color="secondary"
              slot="start"
              icon={logoLinkedin}
            ></IonIcon>
          </IonLabel>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;

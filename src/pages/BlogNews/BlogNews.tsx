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

const BlogNews: React.FC = () => {
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
          <IonTitle color="warning">Blog &amp; News</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Subtitulo</IonCardSubtitle>
                  <IonCardTitle>Titutlo</IonCardTitle>
                </IonCardHeader>
                <IonContent>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Velit est exercitationem delectus sint, vitae possimus veniam,
                  soluta, itaque explicabo a omnis at commodi libero harum.
                  Natus consectetur corporis maxime mollitia.
                </IonContent>
              </IonCard>
              <IonCard>
                <IonItem>
                  <IonIcon icon={pin} slot="start" />
                  <IonLabel>
                    ion-item in a card, icon left, button right
                  </IonLabel>
                  <IonButton fill="outline" slot="end">
                    View
                  </IonButton>
                </IonItem>

                <IonCardContent>
                  This is content, without any paragraph or header tags, within
                  an ion-cardContent element.
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonItem href="#" className="ion-activated">
                  <IonIcon icon={wifi} slot="start" />
                  <IonLabel>Card Link Item 1 activated</IonLabel>
                </IonItem>

                <IonItem href="#">
                  <IonIcon icon={wine} slot="start" />
                  <IonLabel>Card Link Item 2</IonLabel>
                </IonItem>

                <IonItem className="ion-activated">
                  <IonIcon icon={warning} slot="start" />
                  <IonLabel>Card Button Item 1 activated</IonLabel>
                </IonItem>

                <IonItem>
                  <IonIcon icon={walk} slot="start" />
                  <IonLabel>Card Button Item 2</IonLabel>
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

export default BlogNews;

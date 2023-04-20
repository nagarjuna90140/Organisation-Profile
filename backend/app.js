const express = require("express");

const app = express();

const mongoose = require("mongoose");

const cors = require("cors");

const router = require("./Routers/Registration/Router-Registration");

// all
const routerOrg = require("./Routers/Organization/Routes-Organization");

// erpvender
const Erpvender = require("./Routers/Organization/Routes-ERPVender");

// industry
const Industry = require("./Routers/Organization/Routes-Industry");

// ContactOrganization

const ContactOrgnaization = require("./Routers/Organization/Routes-Contactorganization");

// BussinessOrganization

const BussinessOrganization = require("./Routers/Organization/Routes-BussinessOrganization");

//  AMS partner
const Amsparner = require("./Routers/Organization/Routes-AmsPartner");


//  Erp Implemenation part

const ErpImplementation = require("./Routers/Organization/Routes-ErpImplementation")

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/Zettamine-Organization-Profile")
  .then(() => console.log("Zettamine-Organization Databse Connected!"));

app.use(cors());
app.use(express.json());

app.use("/reg", router);

// organization
app.use("/org", routerOrg);

// ERPVENDER
app.use("/erp", Erpvender);

// Industry
app.use("/indusry", Industry);

// Contact Organization
app.use("/contact", ContactOrgnaization);

//  Bussiness Orgnaization
app.use("/bussinesss", BussinessOrganization);

//  AMS PARTNER DETAILES

app.use("/ams", Amsparner);

//  AMS PARTNER DETAILES

app.use("/erpImp", ErpImplementation);





app.listen(5000, () => {
  console.log(`Backend Served is Runing on 5000`);
});

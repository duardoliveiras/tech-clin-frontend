"use client";
import React from "react";
import Footer from "../footer";
import Header from "../Header";
import ConsultationSection from "./consultationSection";
import ExameSection from "./exameSection";
import ProfileForm from "./profileForm";

const UserProfilePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex w-full items-center flex-col p-5 text-gray-800 bg-blue-50">
        <div className="w-full border justify-center flex items-center bg-white rounded-md p-5 ">
          <ProfileForm />
        </div>

        <div className="appointments">
          <ExameSection />
          <ConsultationSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfilePage;

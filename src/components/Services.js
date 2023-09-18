import React from "react";
import Title from "./Title";
import { services } from "../data";
function Services() {
  const data = { title: "Our", subtitle: "Services" };
  return (
    <>
      <section className="section services" id="services">
        <div className="section-title">
          <Title {...data} />
        </div>
        <div className="section-center services-center">
          {services.map((service) => {
            return (
              <article className="service">
                <span key={service.id} className="service-icon">
                  <i className={service.icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-text">{service.ServiceDecs} </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      ;
    </>
  );
}

export default Services;

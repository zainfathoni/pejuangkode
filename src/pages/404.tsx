import Headings from "@narative/gatsby-theme-novela/src/components/Headings";
import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import React from "react";

function NotFoundPage() {
  return (
    <Layout>
      <SEO />
      <Section>
        <div style={{ marginTop: "100px" }}>
          <Headings.h1>404: Page Not Found</Headings.h1>
        </div>
      </Section>
    </Layout>
  );
}

export default NotFoundPage;

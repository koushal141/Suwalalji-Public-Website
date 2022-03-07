import React from "react";
import Head from "next/head";

function HeadTag({ title, desc, img }) {
  return (
    <Head>
      <title>{title || "Suwalalji"}</title>
      <meta charset="UTF-8" />
      <meta
        name="description"
        content={desc || "Tea Time|Tv Time|Snack Time|Anytime"}
      />
      {/* <meta name="keywords" content="HTML, CSS, JavaScript" /> */}

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://suwalalji-website.vercel.app/" />
      <meta property="og:title" content={title || "Suwalalji"} />
      <meta
        property="og:description"
        content={desc || "Tea Time|Tv Time|Snack Time|Anytime"}
      />
      {img && <meta property="og:image" content={img} />}

      {/* <!-- Twitter --/> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://suwalalji-website.vercel.app/"
      />
      <meta property="twitter:title" content={title || "Suwalalji"} />
      <meta
        property="twitter:description"
        content={desc || "Tea Time|Tv Time|Snack Time|Anytime"}
      />
      {img && <meta property="twitter:image" content={img} />}
    </Head>
  );
}

export default HeadTag;

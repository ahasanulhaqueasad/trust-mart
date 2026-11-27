import { Helmet } from "react-helmet-async";

const SITE_URL = "https://trust-mart-rho.vercel.app";

const SEO = ({
  title = "Trust Mart | বিশ্বস্ত অনলাইন শপিং",
  description = "Trust Mart — Pure Trust, Better Life. বিশ্বস্ততা ও মানসম্মত পণ্যের সমন্বয়ে আপনার নির্ভরযোগ্য শপিং ঠিকানা।",
  path = "/",
}) => {
  const canonicalUrl = `${SITE_URL}${path}`;
  const imageUrl = `${SITE_URL}/images/hero-bg.png`;

  return (
    <Helmet>
      <html lang="bn" />

      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="bn_BD" />
      <meta property="og:site_name" content="Trust Mart" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SEO;

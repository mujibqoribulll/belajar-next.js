import Header from "../header";
import Footer from "../footer";
import Head from "next/head";

export default function Layout(props) {
  const { children, metaTitle, metaDescription } = props;
  return (
    <div className="container mx-auto">
      <Head>
        <title>Create Next App - {metaTitle || 'qoribul'}</title>
        <meta
          name="description"
          content={metaDescription || "Generated by create next app"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

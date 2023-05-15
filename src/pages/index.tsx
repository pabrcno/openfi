import React from "react";
import Layout from "@/components/common/mui/Layout";
import { unregisteredUserLinks } from "@/common/links";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <Layout linkItems={unregisteredUserLinks}>
      <Typography variant="h1" component="h1" gutterBottom>
        Hello
      </Typography>
    </Layout>
  );
}

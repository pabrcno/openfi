import React from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useThirdPartyForm } from "@/hooks/common/useThirdPartyForm";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme/theme";

const loginValidationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
});

const LoginForm = () => {
  const {
    simplifiedRegister,
    handleSubmit,
    formState: { errors },
  } = useThirdPartyForm({
    resolver: zodResolver(loginValidationSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          {...simplifiedRegister("email", { required: true })}
          error={!!errors.email}
          helperText={!!errors.email ? "Email is required" : undefined}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          {...simplifiedRegister("password", { required: true })}
          error={!!errors.password}
          helperText={!!errors.password ? "Password is required" : undefined}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "16px" }}
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default function Home() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <LoginForm />
      </ThemeProvider>
    </main>
  );
}

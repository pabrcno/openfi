import React from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useThirdPartyForm } from "@/hooks/common/useThirdPartyForm";

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
          fullWidth
          margin="normal"
          variant="outlined"
          {...simplifiedRegister("email", { required: true })}
          error={!!simplifiedRegister("email").error}
          helperText={"Email is required"}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
          {...simplifiedRegister("password", { required: true })}
          error={!!errors.password}
          helperText={"Password is required"}
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
      <LoginForm />
    </main>
  );
}

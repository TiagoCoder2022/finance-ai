import Image from "next/image";
import { Button } from "../_components/ui/button";
import { ArrowLeftIcon, LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

const LoginPage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="grid h-full lg:grid-cols-2">
      <div className="mx-auto flex h-full max-w-[550px] flex-col items-center justify-center gap-4 p-8">
        <Link href="/">
          <button className="border-2 border-white/50 text-muted-foreground rounded-full p-2 absolute top-4 left-4 hover:text-white hover:border-white transition duration-300">
            <ArrowLeftIcon />
          </button>
        </Link>

        <Image
          src={"/login.svg"}
          width={173}
          height={39}
          alt="logo"
          className="mb-8"
        />
        <h1 className="mb-3 text-center text-4xl font-bold">Bem-vindo</h1>
        <p className="text-muted-foreground">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant={"outline"}>
            <LogInIcon className="mr-2" />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>

      <div className="relative hidden h-full w-full lg:flex">
        <Image
          src={"/login.png"}
          alt="Faça login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
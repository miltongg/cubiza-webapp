import Head from "next/head";
import Link from "next/link";
import { ReactComponentElement, useEffect, useState } from "react";
import {
    ChevronDownIcon,
    Bars3Icon,
    ChevronRightIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import DropdownPanel from "@/components/DropdownPanel";
import useWindowWidth from "@/hooks/useWindowWidth";

type Props = {
    children: any;
    title: string;
};

export default function Layout({ title, children }: Props) {
    const router = useRouter();

    const windowWidth = useWindowWidth();

    const [isPressed, setIsPressed] = useState<{
        service: boolean;
        product: boolean;
    }>({
        service: false,
        product: false,
    });

    const [show, setShow] = useState(false);

    const handleIsPressed = (activate: string): void => {
        activate === "service"
            ? setIsPressed({
                  ...isPressed,
                  service: !isPressed.service,
                  product: false,
              })
            : setIsPressed({
                  ...isPressed,
                  product: !isPressed.product,
                  service: false,
              });
    };

    const handleShow = (): void => {
        setShow(!show);
        setIsPressed({ ...isPressed, service: false, product: false });
    };

    return (
        <>
            <Head>
                <title>{title ? title + " - Cubiza" : "Cubiza"}</title>
                <meta
                    name="description"
                    content="Alquiler de Equipos de Izaje"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex min-h-screen flex-col justify-between bg-white">
                <header>
                    <nav className="flex px-4 justify-between main-color items-center relative z-10">
                        <Link className="text-lg font-bold ml-5" href="/">
                            <img
                                className="h-10"
                                src="../Logo-Cubiza-simple.png"
                                alt="logo-img"
                            />
                        </Link>
                        <div className="hidden sm:flex">
                            <div className="w-full flex ml-10 text-white">
                                <button
                                    className={`flex items-center hover:bg-gray-800 p-4 active:bg-black hover:text-white active:text-white hover:active:bg-black`}
                                    onClick={() => handleIsPressed("service")}>
                                    Servicios{" "}
                                    {isPressed.service ? (
                                        <ChevronDownIcon className="h-5 w-5 rotate-180 duration-300" />
                                    ) : (
                                        <ChevronDownIcon className="h-5 w-5 duration-300" />
                                    )}
                                </button>

                                <div>
                                    <button
                                        className={`flex items-center hover:bg-gray-800 p-4 active:bg-black hover:text-white active:text-white hover:active:bg-black`}
                                        onClick={() =>
                                            handleIsPressed("catalog")
                                        }>
                                        Productos{" "}
                                        {isPressed.product ? (
                                            <ChevronDownIcon className="h-5 w-5 rotate-180 duration-300" />
                                        ) : (
                                            <ChevronDownIcon className="h-5 w-5 duration-300" />
                                        )}
                                    </button>
                                </div>

                                <Link
                                    className="flex items-center hover:bg-gray-800 p-4 active:bg-black hover:text-white active:text-white hover:active:bg-black"
                                    href="/">
                                    Contáctanos
                                </Link>
                            </div>
                            <div className="flex">
                                <Link
                                    className={
                                        router.pathname === "/signin"
                                            ? "active"
                                            : "hover:text-white hover:bg-gray-800 p-4 items-center"
                                    }
                                    href="/signin">
                                    Autenticar
                                </Link>
                                <Link
                                    className={
                                        router.pathname === "/signup"
                                            ? `active`
                                            : `flex items-center p-4`
                                    }
                                    href="/signup">
                                    Registrar
                                </Link>
                            </div>
                        </div>

                        <div
                            className={`${
                                show && window.innerWidth < 640
                                    ? `translate-x-0`
                                    : `-translate-x-96`
                            } ease-in-out h-screen w-60 absolute bg-amber-300 duration-300 top-15 left-0`}>
                            <div className="text-black">
                                {/* <button
                                    className={`flex items-center hover:bg-gray-800 py-4 w-full active:bg-black hover:text-white active:text-white hover:active:bg-black px-10`}
                                    onClick={() => handleIsPressed("service")}>
                                    Servicios{" "}
                                    {isPressed.service ? (
                                        <ChevronRightIcon className="h-5 w-5 rotate-180 duration-300" />
                                    ) : (
                                        <ChevronRightIcon className="h-5 w-5 duration-300" />
                                    )}
                                </button>

                                <div>
                                    <button
                                        className={`flex items-center hover:bg-gray-800 py-4 w-full active:bg-black hover:text-white active:text-white hover:active:bg-black px-10`}
                                        onClick={() =>
                                            handleIsPressed("product")
                                        }>
                                        Catálogo{" "}
                                        {isPressed.product ? (
                                            <ChevronRightIcon className="h-5 w-5 rotate-180 duration-300" />
                                        ) : (
                                            <ChevronRightIcon className="h-5 w-5 duration-300" />
                                        )}
                                    </button>
                                </div> */}

                                <Link
                                    className="flex items-center hover:bg-gray-800 py-4 w-full active:bg-black hover:text-white active:text-white hover:active:bg-black px-10"
                                    href="/">
                                    Contáctanos
                                </Link>
                            </div>
                            <div className="flex flex-col">
                                <Link
                                    className={
                                        router.pathname === "/signin"
                                            ? "active"
                                            : "hover:text-white hover:bg-gray-800 py-4 w-full items-center px-10"
                                    }
                                    href="/signin">
                                    Autenticar
                                </Link>
                                <Link
                                    className={
                                        router.pathname === "/signup"
                                            ? `active`
                                            : `hover:text-white hover:bg-gray-800 py-4 w-full items-center px-10`
                                    }
                                    href="/signup">
                                    Registrar
                                </Link>
                            </div>
                        </div>

                        <div className="sm:hidden flex align-middle py-3">
                            <button
                                className="rounded border-2 border-gray-800 hover:bg-gray-800 relative"
                                onClick={handleShow}>
                                {!show ? (
                                    <Bars3Icon className="h-8 w-8 text-gray-800 hover:text-white" />
                                ) : (
                                    <XMarkIcon className="h-8 w-8 text-gray-800 hover:text-white" />
                                )}
                            </button>
                        </div>
                    </nav>
                    <div>
                        {/*{windowWidth >= 640 ? <DropdownPanel pressed={isPressed} /> : <></>}*/}
                        {show ? (
                            <DropdownPanel pressed={isPressed} />
                        ) : (
                            <DropdownPanel pressed={isPressed} />
                        )}
                    </div>
                </header>
                <main className="container m-auto mt-4 px-4">{children}</main>
                <footer className="flex h-10 justify-center items-center shadow-inner">
                    footer
                </footer>
            </div>
        </>
    );
}

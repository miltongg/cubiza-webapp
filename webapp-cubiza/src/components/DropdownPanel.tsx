import React, { ReactElement } from "react";
import Link from "next/link";
import useWindowWidth from "@/hooks/useWindowWidth";

interface Props {
    pressed: {
        service: boolean;
        product: boolean;
    };
}

const DropdownPanel = ({ pressed }: Props) => {
    const windowWidth = useWindowWidth();

    return (
        <div>
            <div
                className={`w-1/2 rounded-b bg-gray-100 text-black absolute right-96 duration-300 ease-in-out ${
                    pressed.service ? "" : `-translate-y-64`
                }`}>
                <div className="flex flex-col text-center">
                    <Link className="p-2 hover:main-color" href="/as">
                        Servicio 1
                    </Link>
                    <hr />
                    <Link className="p-2 hover:main-color" href="/as">
                        Servicio 2
                    </Link>
                    <hr />
                    <Link className="p-2 hover:main-color" href="/as">
                        Servicio 3
                    </Link>
                    <hr />
                    <Link className="p-2 hover:main-color rounded-b" href="/as">
                        Servicio 4
                    </Link>
                </div>
            </div>

            <div
                className={`w-1/2 rounded-b bg-gray-100 text-black absolute right-96 duration-300 ease-in-out ${
                    pressed.product ? "" : `-translate-y-64`
                }`}>
                <div className="flex flex-col text-center">
                    <Link className="p-2 hover:main-color" href="/as">
                        Producto 1
                    </Link>
                    <hr />
                    <Link className="p-2 hover:main-color" href="/as">
                        Producto 2
                    </Link>
                    <hr />
                    <Link className="p-2 hover:main-color" href="/as">
                        Producto 3
                    </Link>
                    <hr />
                    <Link
                        className="p-2 hover:main-color rounded-b" href="/as">
                        Producto 4
                    </Link>
                </div>
            </div>
        </div>
        // <div>
        //   <div
        //     className={
        //       `${windowWidth <= 640
        //         ? `left-36 top-15 ${pressed.service
        //           ? `translate-x-24` : `-translate-x-96`}`
        //         : `left-140px ${pressed.service ? ""
        //           : "-translate-y-64"}`}
        //     w-52 rounded-b absolute bg-gray-100 text-black duration-300 ease-in-out
        //     `}
        //   >
        //     <div className="flex flex-col">
        //       <Link className="p-2 hover:bg-amber-300" href="/as">
        //         Servicio 1
        //       </Link>
        //       <hr/>
        //       <Link className="p-2 hover:bg-amber-300" href="/as">
        //         Servicio 2
        //       </Link>
        //       <hr/>
        //       <Link className="p-2 hover:bg-amber-300" href="/as">
        //         Servicio 3
        //       </Link>
        //       <hr/>
        //       <Link
        //         className="p-2 hover:bg-amber-300 rounded-b"
        //         href="/as"
        //       >
        //         Servicio 4
        //       </Link>
        //     </div>
        //   </div>

        //   <div
        //     className={
        //       `${windowWidth <= 640
        //         ? `left-36 top-29 ${pressed.product
        //           ? `translate-x-24` : `-translate-x-96`}`
        //         : `left-140px ${pressed.product ? ""
        //           : "-translate-y-64"}`}
        //     w-52 rounded-b absolute bg-gray-100 text-black duration-300 ease-in-out
        //     `}
        //   >
        //     <div className="flex flex-col">
        //       <Link className="p-2 hover:bg-amber-300" href="/as">
        //         Producto 1
        //       </Link>
        //       <hr/>
        //       <Link className="p-2 hover:bg-amber-300" href="/as">
        //         Producto 2
        //       </Link>
        //       <hr/>
        //       <Link className="p-2 hover:bg-amber-300" href="/as">
        //         Producto 3
        //       </Link>
        //       <hr/>
        //       <Link
        //         className="p-2 hover:bg-amber-300 rounded-b"
        //         href="/as"
        //       >
        //         Producto 4
        //       </Link>
        //     </div>
        //   </div>
        // </div>
    );
};

export default DropdownPanel;

import Image from "next/image";

const Background = () => {
    return (
        <Image
            src={"https://images.unsplash.com/photo-1676216124213-f46f8ee0f9c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"}
            height={4096}
            width={4096}
            alt="background image"
            className="absolute top-0 left-0 bottom-0 z-[-10] w-full h-full object-cover"
        />
    );
}

export default Background;
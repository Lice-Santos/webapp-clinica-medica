import Image from "next/image"

export default function Cabecalho(){
    return (
        <header className="bg-orange-200 p-2 flex items-center gap-3">
            <Image
            src="/images/logoOficial.svg"
            alt="Logo oficial"
            width={80}
            height={40}
            />

            <span className="text-primary-500">TriAqui</span>
        </header>
    )
}

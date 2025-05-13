import Image from "next/image";

export default function Header() {
	return (
		<div className="flex flex-row items-center bg-[#75cbea] h-32 w-full p-5 space-x-6">
			<Image
				src={"/assets/ausgovlogo.png"}
				width={125}
				height={125}
				quality={95}
				alt="Australian Government Logo"
			/>
			<h2 className="font-bold text-2xl">Fanum Tax</h2>
		</div>
	)
}

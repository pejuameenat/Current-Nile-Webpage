import { logoTrusted } from "../../assets"

const LogoCompanies = () => {
  return (
      <div className="md:w-[1002px] max-w-full flex flex-col gap-2 mb-[72px] mx-auto">
          <h3 className="text-primary text-center text-xl py-2">Trusted Entrepreneurs And Businesses Around The World </h3>
          <div className="mt-4"><img src={logoTrusted} alt="company that trust us logos" /></div>
    </div>
  )
}

export default LogoCompanies
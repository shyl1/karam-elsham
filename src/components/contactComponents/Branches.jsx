import { useTranslation } from "react-i18next";
import HeaderTable from "./HeaderTable";
import useBranches from "@/hooks/useBranches";
import Title from "../sharedComponents/Title";
import DataTable from "./DataTable";

export default function Branches() {

    const {i18n} = useTranslation();
    
    const lang = (i18n.resolvedLanguage || i18n.language || 'ar').split('-')[0];

    const {data: branches , error , isLoading} = useBranches();

    console.log(branches);

    return (
        <section className="mt-20">
            <div className="container">
                <div className="flex justify-between items-center">
                    <Title textKey="contactPage.branches" textColor={'text-[var(--color-btn-bg-yellow)]'} textSize={'text-sm md:text-xl'} 
                        bgColor={'bg-text-brown'} paddingX={'px-5'} paddingY={'py-3'}
                    />
                </div>
            
                <HeaderTable lang={lang}/>
                <div>
                    {isLoading && <p>Loading...</p>}
                    {error && <p>Error loading branches.</p>}

                    {
                        Array.isArray(branches) && branches.map((branch) => (
                            <DataTable key={branch.branch_id} branch={branch} lang={lang}/>
                        ))
                    }
                </div>
            </div>   
        </section>
    )
}

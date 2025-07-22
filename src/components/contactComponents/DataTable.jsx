import { getLocalizedText } from "@/utils/getLocalizedText"


export default function DataTable({branch , lang}) {

    const Branch = getLocalizedText(branch , 'Branch' , lang );
    const address = getLocalizedText(branch , 'Address' , lang);

    return (
        <table className="w-full text-xs md:text-xl table-fixed border-collapse">
            <tbody>
                <tr>
                    <td className={`px-4 py-3 ${lang === 'ar'? 'border-l' : 'border-r'} border-[var(--color-text-brown)] w-1/3`}>
                        <span className="flex justify-center items-center">{Branch}</span>
                    </td>
                    <td className={`px-4 py-3 ${lang === 'ar'? 'border-l' : 'border-r'} border-[var(--color-text-brown)] w-1/3`}>{address}</td>
                    <td className="px-4 py-3 w-1/3 "><a href={`${branch.google_maps}`} target="_blank" className="flex justify-center items-center underline decoration-[var(--color-text-brown)] text-[var(--color-text-brown)]">{lang === 'ar'? 'رابط العنوان' : 'Link Address'}</a></td>
                </tr>
            </tbody>
        </table>
    )
}

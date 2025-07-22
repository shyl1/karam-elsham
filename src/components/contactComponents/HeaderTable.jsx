

export default function HeaderTable({lang}) {    
    
    return (
        <table className="w-full mt-6 text-sm md:text-xl">
            <thead className="border-[var(--color-text-brown)] border-b-2">
                <tr>
                    <th className={`pb-5 ${lang === 'ar' ? 'border-l' : 'border-r'} border-[var(--color-text-brown)] w-1/3`}>{lang === 'ar' ? 'الفرع' : 'Branch'}</th>
                    <th className={`pb-5 ${lang === 'ar' ? 'border-l' : 'border-r'} border-[var(--color-text-brown)] w-1/3`}>{lang === 'ar' ? 'العنوان' : 'Address'}</th>
                    <th className="pb-5 w-1/3">{lang === 'ar' ? 'جوجل مابس' : 'Google Maps'}</th>
                </tr>
            </thead>
        </table>
    )
}

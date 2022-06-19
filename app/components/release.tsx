import { Cta } from '~/components/cta';
import type { IRelease } from 'types/contentful';

export function Release({ releaseData} : {releaseData: IRelease}) {
    // console.log(releaseData);
    const ctaText = Date.now() - Number(new Date(releaseData.fields.releaseDate)) < 0 ? 'pre-save' : 'stream/download';
    // console.log(buttonText);
    return (
        <>
            <div className="p-4">
                <img className="mb-3" src={releaseData.fields.coverArt.fields.file.url} alt={releaseData.fields.coverArt.fields.description} />
                <Cta>{ctaText}</Cta>
            </div>
        </>
    );
};

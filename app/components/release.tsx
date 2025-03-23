import { Cta } from "@app/components/cta";
import type { TypeRelease } from "@genTypes/index";
import { ChainModifiers } from "contentful";

export function Release({
    releaseData,
}: {
    releaseData: TypeRelease<ChainModifiers>;
}) {
    console.log(releaseData);
    const ctaText =
        Date.now() -
            Number(new Date(releaseData.fields.releaseDate as string)) <
        0
            ? "pre-save"
            : "stream/download";
    // console.log(buttonText);
    return (
        <>
            <div className="p-4">
                {releaseData.fields.coverArt ? (
                    <img
                        className="mb-3"
                        src={releaseData.fields.coverArt.fields.file.url}
                        alt={releaseData.fields.coverArt.fields.description}
                    />
                ) : (
                    <></>
                )}
                <Cta>{ctaText}</Cta>
            </div>
        </>
    );
}

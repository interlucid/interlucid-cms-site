import type {
    ChainModifiers,
    Entry,
    EntryFieldTypes,
    EntrySkeletonType,
    LocaleCode,
} from "contentful";

export interface TypeReleaseFields {
    title: EntryFieldTypes.Symbol;
    releaseDate: EntryFieldTypes.Date;
    coverArt: EntryFieldTypes.AssetLink;
}

export type TypeReleaseSkeleton = EntrySkeletonType<
    TypeReleaseFields,
    "release"
>;
export type TypeRelease<
    Modifiers extends ChainModifiers,
    Locales extends LocaleCode = LocaleCode,
> = Entry<TypeReleaseSkeleton, Modifiers, Locales>;
export type TypeReleaseWithoutLinkResolutionResponse =
    TypeRelease<"WITHOUT_LINK_RESOLUTION">;
export type TypeReleaseWithoutUnresolvableLinksResponse =
    TypeRelease<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeReleaseWithAllLocalesResponse<
    Locales extends LocaleCode = LocaleCode,
> = TypeRelease<"WITH_ALL_LOCALES", Locales>;
export type TypeReleaseWithAllLocalesAndWithoutLinkResolutionResponse<
    Locales extends LocaleCode = LocaleCode,
> = TypeRelease<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeReleaseWithAllLocalesAndWithoutUnresolvableLinksResponse<
    Locales extends LocaleCode = LocaleCode,
> = TypeRelease<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

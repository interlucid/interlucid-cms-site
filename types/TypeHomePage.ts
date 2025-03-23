import type {
    ChainModifiers,
    Entry,
    EntryFieldTypes,
    EntrySkeletonType,
    LocaleCode,
} from "contentful";
import type { TypeReleaseSkeleton } from "./TypeRelease";

export interface TypeHomePageFields {
    nameLogo?: EntryFieldTypes.AssetLink;
    tagline?: EntryFieldTypes.Symbol;
    bio?: EntryFieldTypes.Text;
    latestRelease: EntryFieldTypes.EntryLink<TypeReleaseSkeleton>;
}

export type TypeHomePageSkeleton = EntrySkeletonType<
    TypeHomePageFields,
    "homePage"
>;
export type TypeHomePage<
    Modifiers extends ChainModifiers,
    Locales extends LocaleCode = LocaleCode,
> = Entry<TypeHomePageSkeleton, Modifiers, Locales>;
export type TypeHomePageWithoutLinkResolutionResponse =
    TypeHomePage<"WITHOUT_LINK_RESOLUTION">;
export type TypeHomePageWithoutUnresolvableLinksResponse =
    TypeHomePage<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeHomePageWithAllLocalesResponse<
    Locales extends LocaleCode = LocaleCode,
> = TypeHomePage<"WITH_ALL_LOCALES", Locales>;
export type TypeHomePageWithAllLocalesAndWithoutLinkResolutionResponse<
    Locales extends LocaleCode = LocaleCode,
> = TypeHomePage<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeHomePageWithAllLocalesAndWithoutUnresolvableLinksResponse<
    Locales extends LocaleCode = LocaleCode,
> = TypeHomePage<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

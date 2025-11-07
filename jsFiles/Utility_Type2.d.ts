interface clgData4 {
    name: string;
    location: string;
    branch: string;
    teacherCount: number;
}
declare var clgData4: Omit<clgData4, "branch" | "teacherCount">;
type Apicall = "loading" | "pending" | "success" | "failed";
declare let apis: Exclude<Apicall, "pending">;
declare let apis123: Extract<Apicall, "loading" | "success">;
type nullableType = string | number | null | undefined;
type nonNullableType = NonNullable<nullableType>;
type productType = "id" | "name" | "price";
declare var products: Record<productType, string>;

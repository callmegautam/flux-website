import { redirect } from "next/navigation";

const page = () => {
    return redirect("https://github.com/callmegautam/flux/releases/tag/v0.1.0-alpha");
};

export default page;

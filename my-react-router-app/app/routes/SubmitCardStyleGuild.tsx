//This route is a page to display all the different states of the Submit Card feature when assigning or selling boxes 

import { redirect, type ActionFunctionArgs } from "react-router"
import BuyerInfoForm from "Components/BuyerCardForm";


export default function SubmitCardStyleGuild() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold text-center mb-6">Buyer Info</h2>
      <BuyerInfoForm />
    </div>
  )
}

//
// Loader → handles GET requests (page loads)
//
export async function loader() {
  // Could fetch existing buyer data, or just return null
  return null
}

//
// Action → handles POST (form submissions)
//
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const name = formData.get("name")
  const phone = formData.get("phone")
  const email = formData.get("email")

  try {
    const backendURL = new URL("/php/TestFormSub.php", request.url)
    // Send POST to your PHP backend
    const response = await fetch(backendURL.toString(), {
      method: "POST",
      body: new URLSearchParams({
        name: String(name),
        phone: String(phone),
        email: String(email ?? ""),
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })

    if (!response.ok) throw new Error("Network error");
    
    // Redirect after success
    console.log(response)
    const text = await response.text();
    console.log("Server response body:", text);
    // return redirect("/Homepages/main")
  } catch (error) {
    console.error("Form submission failed:", error)
    return { error: "Form submission failed." }
  }
}

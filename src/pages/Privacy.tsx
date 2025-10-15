import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Ditel Network Solutions</title>
        <meta 
          name="description" 
          content="Learn how Ditel Network Solutions collects, uses, and protects your personal information. Read our comprehensive Privacy Policy." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="container mx-auto px-4 py-24">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: October 15, 2025</p>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg mb-6">This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Interpretation and Definitions</h2>
              
              <h3 className="text-xl font-semibold mb-3">Interpretation</h3>
              <p className="mb-4">The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
              
              <h3 className="text-xl font-semibold mb-3">Definitions</h3>
              <p className="mb-2">For the purposes of this Privacy Policy:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Ditel Network Solutions, 520 Saini Plaza, Choma Road, Palam Vihar, Near Prem Motors, Gurugram, Haryana 122017.</li>
                <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
                <li><strong>Country</strong> refers to: Haryana, India</li>
                <li><strong>Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</li>
                <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                <li><strong>Service</strong> refers to the Website.</li>
                <li><strong>Website</strong> refers to ditel, accessible from https://www.ditel.co.in/</li>
                <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Collecting and Using Your Personal Data</h2>
              
              <h3 className="text-xl font-semibold mb-3">Types of Data Collected</h3>
              
              <h4 className="text-lg font-semibold mb-2">Personal Data</h4>
              <p className="mb-4">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name, email address, phone number, postal address and other information You voluntarily provide when contacting Us or using the Service.</li>
              </ul>
              
              <h4 className="text-lg font-semibold mb-2">Usage Data</h4>
              <p className="mb-4">Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Use of Your Personal Data</h2>
              <p className="mb-2">The Company may use Personal Data for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>To provide and maintain our Service, including to monitor the usage of our Service.</li>
                <li>To manage Your Account: to manage Your registration as a user of the Service.</li>
                <li>For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
                <li>To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.</li>
                <li>To provide You with news, special offers, and general information about other goods, services and events which We offer.</li>
                <li>To manage Your requests: To attend and manage Your requests to Us.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Retention of Your Personal Data</h2>
              <p className="mb-4">The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Security of Your Personal Data</h2>
              <p className="mb-4">The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially reasonable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
              <p className="mb-4">Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Links to Other Websites</h2>
              <p className="mb-4">Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to this Privacy Policy</h2>
              <p className="mb-4">We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-2">If you have any questions about this Privacy Policy, You can contact us:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>By email: vijay.massey@ditel.co.in</li>
                <li>By phone: 8447373543, 9289020121</li>
                <li>By post: Ditel Network Solutions, 520 Saini Plaza, Choma Road, Palam Vihar, Near Prem Motors, Gurugram, Haryana 122017</li>
                <li>Website: https://www.ditel.co.in</li>
              </ul>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Privacy;

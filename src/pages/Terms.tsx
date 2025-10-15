import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - Ditel Network Solutions</title>
        <meta 
          name="description" 
          content="Read the Terms and Conditions for using Ditel Network Solutions services. Understand your rights and obligations." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="container mx-auto px-4 py-24">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: October 15, 2025</p>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg mb-6">Please read these terms and conditions carefully before using Our Service.</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Interpretation and Definitions</h2>
              
              <h3 className="text-xl font-semibold mb-3">Interpretation</h3>
              <p className="mb-4">The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
              
              <h3 className="text-xl font-semibold mb-3">Definitions</h3>
              <p className="mb-2">For the purposes of these Terms and Conditions:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                <li><strong>Country</strong> refers to: Haryana, India</li>
                <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Ditel Network Solutions, 520 Saini Plaza, Choma Road, Palam Vihar, Near Prem Motors, Gurugram, Haryana 122017.</li>
                <li><strong>Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</li>
                <li><strong>Service</strong> refers to the Website.</li>
                <li><strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
                <li><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</li>
                <li><strong>Website</strong> refers to ditel, accessible from https://www.ditel.co.in/</li>
                <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Acknowledgment</h2>
              <p className="mb-4">These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
              <p className="mb-4">Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
              <p className="mb-4">By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
              <p className="mb-4">You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
              <p className="mb-4">Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Links to Other Websites</h2>
              <p className="mb-4">Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
              <p className="mb-4">The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
              <p className="mb-4">We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Termination</h2>
              <p className="mb-4">We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
              <p className="mb-4">Upon termination, Your right to use the Service will cease immediately.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="mb-4">Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
              <p className="mb-4">To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
              <p className="mb-4">Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
              <p className="mb-4">The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
              <p className="mb-4">The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Disputes Resolution</h2>
              <p className="mb-4">If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-2">If you have any questions about these Terms and Conditions, You can contact us:</p>
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

export default Terms;

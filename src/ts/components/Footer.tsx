import { Button, Footer, Textarea, TextInput } from "flowbite-react";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMail, HiUser } from "react-icons/hi";

export default function Foot() {
  return (
    <Footer bgDark={true}>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
          {/* <div className="col-span-2"> */}
          {/* <Footer.Title title="contact" />
            <div className="mb-4 grid grid-cols-2 gap-4">
              <TextInput
                id="name"
                type="name"
                icon={HiUser}
                placeholder="firstname lastname"
                required={true}
              />
              <TextInput
                id="email"
                type="email"
                icon={HiMail}
                placeholder="name@example.com"
                required={true}
              />
            </div>
            <Textarea
              id="message"
              placeholder="message"
              className="mb-4"
              required={true}
            />
            <Button
              type="submit"
              className="!dark:bg-secondary w-full !bg-primary"
            >
              Send
            </Button> */}
          {/* </div> */}
          <div>
            <Footer.Title title="Info" />
            <Footer.LinkGroup col={true}>
              {/* <Footer.Link href="#">SOON</Footer.Link> */}
              <p className="text-base">
                This website is a portfolio website for my projects and company.
                Check out my projects and contact me if you need a custom build web application or something else.
              </p>
              <p className="text-base">Contact: info@jcklerk.dev</p>
              <p className="text-base">KVK: 900825144</p>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Downloads" />
            <Footer.LinkGroup col={true}>
              <Footer.Link href="https://apps.apple.com/nl/developer/justin-cornel-klerk/id1645277594">
                App Store
              </Footer.Link>
              <Footer.Link href="https://play.google.com/store/apps/dev?id=8260080810597510242">
                Play Store
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Other" />
            <Footer.LinkGroup col={true}>
              <Footer.Link href="https://tickets.jcklerk.nl">
                Event Tickets Shop
              </Footer.Link>
              <Footer.Link href="https://privacy-policy.jcklerk.dev">
                privacy-policy
              </Footer.Link>
              <Footer.Link href="https://status.jcklerk.dev/status/iventionair">
                Status: iventionair
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-slate-100 py-6 px-4 dark:bg-gray-700 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="@JCKLERK"
            year={new Date().getFullYear()}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://instagram.com/jcklerk"
              icon={BsInstagram}
            />
            <Footer.Icon href="https://github.com/jcklerk" icon={BsGithub} />
            <Footer.Icon
              href="https://www.linkedin.com/in/jcklerk/"
              icon={BsLinkedin}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}

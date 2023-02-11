import { Button, Footer, Textarea, TextInput } from "flowbite-react";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMail, HiUser } from "react-icons/hi";

export default function Foot() {
  return (
    <Footer bgDark={true}>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
          <div className="col-span-2">
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
          </div>
          <div>
            <Footer.Title title="Info" />
            <Footer.LinkGroup col={true}>
              {/* <Footer.Link href="#">SOON</Footer.Link> */}
              <p className="text-base">Aan deze website word nog gewerkt.</p>
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
        </div>
        <div className="w-full bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between">
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

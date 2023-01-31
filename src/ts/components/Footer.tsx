import { Button, Footer, Textarea, TextInput } from "flowbite-react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { HiMail, HiUser } from "react-icons/hi";

export default function Foot() {
  return (
    <Footer bgDark={true}>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
          <div className="col-span-2">
            <Footer.Title title="contact" />
            <div className="grid grid-cols-2 gap-4 mb-4">
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
              className="w-full !bg-primary !dark:bg-secondary"
            >
              Send
            </Button>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col={true}>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms & Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" />
            <Footer.LinkGroup col={true}>
              <Footer.Link href="#">iOS</Footer.Link>
              <Footer.Link href="#">Android</Footer.Link>
              <Footer.Link href="#">Windows</Footer.Link>
              <Footer.Link href="#">MacOS</Footer.Link>
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
          </div>
        </div>
      </div>
    </Footer>
  );
}

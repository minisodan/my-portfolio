import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <>
      <footer class="flex rounded-lg shadow m-4 bg-transparent">
        <div class="md:w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <p class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a
              href="https://my-portfolio-psi-plum.vercel.app"
              class="hover:underline"
            >
              Mason Myles
            </a>
            . All Rights Reserved.
          </p>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="https://www.linkedin.com/in/masonmyles/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>

            <li>
              <a href="https://github.com/minisodan">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;

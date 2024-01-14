import { load } from "../deps.ts";
import { BitwardenClient } from "../dev_deps.ts";

export class SecretsManager {
  client: BitwardenClient;

  constructor() {
    // Bitwarden client is configurable (loglevel...)
    // @see https://github.com/bitwarden/sdk/tree/main/crates/bitwarden-napi#getting-started
    this.client = new BitwardenClient();
    // @todo setup client authentication
    // this.client.loginWithAccessToken(accessToken);
  }
  /**
   * Replace secrets ID in .env file by secrets value
   * @param envFilePath
   * @returns Wether the operation is completely successful or a list of replacement status
   */
  async injectSecrets(envFilePath: string = ".env"): Promise<boolean> {
    const env = await load();
    console.log(env);

    for (const key in env) {
      if (Object.prototype.hasOwnProperty.call(env, key)) {
        if (this.isSecretId(env[key])) {
          // @todo read .env (envFilePath) and search replace value by bitwarden secrets
        }
      }
    }

    return true;
  }

  /**
   * Get the secret value of the passed secret ID
   */
  getSecretValue(secretId: string): string {
    return "";
  }

  /**
   * Validate a value as a Bitwarden Secrets Manager secret ID
   * @return {boolean} Whether the value is a secret ID
   */
  isSecretId(secretId: string): boolean {
    // @todo validate secret id using regular expression
    if (secretId) {
      return true;
    }
    return false;
  }
}

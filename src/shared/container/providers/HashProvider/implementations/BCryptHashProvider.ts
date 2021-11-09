import { hash, compare } from 'bcryptjs';
import { HashProviderImplementation } from '@shared/container/providers/HashProvider/models/HashProvideImplementation';

class BCryptHashProvider implements HashProviderImplementation {
  public async generateHash(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}

export default BCryptHashProvider;

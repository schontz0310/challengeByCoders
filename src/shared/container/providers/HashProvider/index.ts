import { container } from 'tsyringe';

import { HashProviderImplementation } from '@shared/container/providers/HashProvider/models/HashProvideImplementation';
import BCryptHashProvider from '@shared/container/providers/HashProvider/implementations/BCryptHashProvider';

container.registerSingleton<HashProviderImplementation>(
  'HashProvider',
  BCryptHashProvider,
);

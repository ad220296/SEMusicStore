//@CodeCopy

#if IDINT_ON
global using IdType = System.Int32;
#elif IDLONG_ON
global using IdType = System.Int64;
#elif IDGUID_ON
global using IdType = System.Guid;
#else
global using IdType = System.Int32;
#endif
global using Common = SEMusicStore.Common;
global using CommonEnums = SEMusicStore.Common.Enums;
global using CommonContracts = SEMusicStore.Common.Contracts;
global using CommonModels = SEMusicStore.Common.Models;
global using CommonModules = SEMusicStore.Common.Modules;
global using SEMusicStore.Common.Extensions;
global using System.ComponentModel.DataAnnotations;
global using System.ComponentModel.DataAnnotations.Schema;
global using Microsoft.EntityFrameworkCore;


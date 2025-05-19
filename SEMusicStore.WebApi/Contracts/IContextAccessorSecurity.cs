//@CodeCopy
#if ACCOUNT_ON
namespace SEMusicStore.WebApi.Contracts
{
    partial interface IContextAccessor
    {
        string SessionToken { set; }
    }
}
#endif
